import { describe, expect, test } from 'bun:test';

import app from './app';

describe('App', () => {
  test('shoud be running', async () => {
    app.get('/', c => {
      return c.newResponse(null, { status: 200 });
    });

    const request = await app.request('/');

    expect(app).toBeDefined();
    expect(request).toBeDefined();
    expect(request.status).toBe(200);
  });
});
