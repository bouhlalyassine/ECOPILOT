from contextlib import contextmanager
import os

from sqlmodel import SQLModel, Session, create_engine


DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./rse_app.db")
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(DATABASE_URL, echo=False, connect_args=connect_args)


def init_db() -> None:
    """Create database tables if they do not already exist."""
    SQLModel.metadata.create_all(engine)


def get_session():
    """FastAPI dependency that provides a SQLModel session."""
    with Session(engine) as session:
        yield session


@contextmanager
def session_scope():
    """Context manager useful for scripts such as data seeding."""
    session = Session(engine)
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()
