exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('books').del()
  .then(() => {
    return Promise.all([
      // Inserts seed entries
      knex('books').insert({
        author: 'Gloria Steinem',
        title: 'My Life on The Road',
        rating: 4,
        description: 'Gloria Steinem tells about significant events in her life through times she has been away from home.'
      })
    ]);
  });
};
