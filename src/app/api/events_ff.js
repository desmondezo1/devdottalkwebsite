// import { NextResponse } from 'next/server';

// const EVENTBRITE_API_URL = 'https://www.eventbriteapi.com/v3/organizations';

// export async function GET() {
//   const token = process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN;
//   const organizationId = process.env.NEXT_PUBLIC_ORGANIZATION_ID;

//   if (!token || !organizationId) {
//     return NextResponse.json({ error: "Missing Eventbrite credentials" }, { status: 500 });
//   }

//   try {
//     const response = await fetch(`${EVENTBRITE_API_URL}/${organizationId}/events/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch events: ${response.statusText}`);
//     }

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
