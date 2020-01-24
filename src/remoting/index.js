/**
*** This file handles all calls to external API's.
*** All function exported from here should be
*** asyncronous
**/

export async exampleFetch() {
  // fetch data here. Use `await`
  return [
    { title: 'Test 1', detail: 'I am some notes' },
    { title: 'Test 2', detail: 'I am some more notes' },
  ];
};

export async examplePersist(inputNotes) {
  return { status: 'success', notes: 'It went okay' };
}
