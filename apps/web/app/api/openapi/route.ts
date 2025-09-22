import { NextResponse } from 'next/server';

const schema = {
  openapi: '3.0.0',
  info: {
    title: 'Ecopilot API',
    version: '1.0.0'
  },
  paths: {
    '/api/organizations': {
      get: {
        summary: 'List organizations',
        responses: { '200': { description: 'Successful response' } }
      }
    },
    '/api/modules/energy': {
      get: { summary: 'List energy records', responses: { '200': { description: 'OK' } } }
    },
    '/api/imports': {
      post: {
        summary: 'Import Excel data',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  mode: { type: 'string' },
                  file: { type: 'string', description: 'Base64 encoded XLSX file' }
                }
              }
            }
          }
        },
        responses: { '200': { description: 'Preview or commit result' } }
      }
    }
  }
};

export async function GET() {
  return NextResponse.json(schema);
}
