import { test, expect } from '@playwright/test';

const bookingData = {
  firstname: 'Tomas',
  lastname: 'Vivas',
  totalprice: 15000,
  depositpaid: true,
  bookingdates: {
    checkin: '2026-06-01',
    checkout: '2026-06-10'
  },
  additionalneeds: 'Breakfast'
};

const newBookingData = {
  firstname: 'Gaston',
  lastname: 'Perez',
  totalprice: 20000,
  depositpaid: false,
  bookingdates: {
    checkin: '2026-06-05',
    checkout: '2026-06-15'
  },
  additionalneeds: 'Lunch'
};

test('Verify attempting to update a booking and getting a 200', async ({ request }) => {
   const createResponse = await request.post('http://localhost:3001/booking', {
    data: bookingData
  });
  expect(createResponse.ok()).toBeTruthy();
  const booking = await createResponse.json();

  const authRes = await request.post('http://localhost:3001/auth', {
    data: { username: 'admin', password: 'password123' }
  });
  const token = (await authRes.json()).token;

  
  const updateResponse = await request.put(`http://localhost:3001/booking/${booking.bookingid}`, {
    data: newBookingData,
    headers: {
      Accept: 'application/json',
      Cookie: `token=${token}`
    }
  });

  expect(updateResponse.status()).toBe(200);
});

test('Verify attempting to update a booking without auth', async ({ request }) => {
   const createResponse = await request.post('http://localhost:3001/booking', {
    data: bookingData
  });
  expect(createResponse.ok()).toBeTruthy();
  const booking = await createResponse.json();

  
  const updateResponse = await request.put(`http://localhost:3001/booking/${booking.bookingid}`, {
    data: newBookingData,
    headers: {
      Accept: 'application/json',
    }
  });

  expect(updateResponse.status()).toBe(403);
});

test('Verify attempting to update a non existing booking', async ({ request }) => {
 const authRes = await request.post('http://localhost:3001/auth', {
    data: { username: 'admin', password: 'password123' }
  });
  const token = (await authRes.json()).token;

  const updateResponse = await request.put(`http://localhost:3001/booking/999`, {
    data: newBookingData,
    headers: {
      Accept: 'application/json',
      Cookie: `token=${token}`
    }
  });

  expect(updateResponse.status()).toBe(405);
});

test('Verify attempting to update only firstname and lastname', async ({ request }) => {
   const createResponse = await request.post('http://localhost:3001/booking', {
    data: bookingData
  });
  expect(createResponse.ok()).toBeTruthy();
  const booking = await createResponse.json();

  const authRes = await request.post('http://localhost:3001/auth', {
    data: { username: 'admin', password: 'password123' }
  });
  const token = (await authRes.json()).token;

  
  const updateResponse = await request.patch(`http://localhost:3001/booking/${booking.bookingid}`, {
    data: {
      firstname: newBookingData.firstname,
      lastname: newBookingData.lastname
    },
    headers: {
      Accept: 'application/json',
      Cookie: `token=${token}`
    }
  });

  expect(updateResponse.status()).toBe(200);
});

test('Verify attempting to update with invalid data', async ({ request }) => {
   const createResponse = await request.post('http://localhost:3001/booking', {
    data: bookingData
  });
  expect(createResponse.ok()).toBeTruthy();
  const booking = await createResponse.json();

  const authRes = await request.post('http://localhost:3001/auth', {
    data: { username: 'admin', password: 'password123' }
  });
  const token = (await authRes.json()).token;

  
  const updateResponse = await request.put(`http://localhost:3001/booking/${booking.bookingid}`, {
    data: {
      firstname: 2000, // Invalid type
      lastname: 'String555', 
      totalprice: "price", // Invalid type
      depositpaid: 100, // Invalid type
      bookingdates: {
        checkin: 'string',   // Invalid type
        checkout: 200  // Invalid type
      },
      additionalneeds:  12345 // Invalid type
    },
    headers: {
      Accept: 'application/json',
      Cookie: `token=${token}`
    }
  });

  expect(updateResponse.status()).toBe(500);
});