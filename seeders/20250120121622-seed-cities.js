'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cities', [
      // Russia
      { name: 'Moscow', countryId: 1 },
      { name: 'Saint Petersburg', countryId: 1 },
      { name: 'Novosibirsk', countryId: 1 },
      { name: 'Yekaterinburg', countryId: 1 },
      { name: 'Kazan', countryId: 1 },
      { name: 'Nizhny Novgorod', countryId: 1 },
      // Kazakhstan
      { name: 'Almaty', countryId: 2 },
      { name: 'Astana', countryId: 2 },
      { name: 'Shymkent', countryId: 2 },
      { name: 'Karaganda', countryId: 2 },
      { name: 'Aktobe', countryId: 2 },
      { name: 'Pavlodar', countryId: 2 },
      // Ukraine
      { name: 'Kyiv', countryId: 3 },
      { name: 'Kharkiv', countryId: 3 },
      { name: 'Odessa', countryId: 3 },
      { name: 'Dnipro', countryId: 3 },
      { name: 'Lviv', countryId: 3 },
      { name: 'Zaporizhzhia', countryId: 3 },
      // Belarus
      { name: 'Minsk', countryId: 4 },
      { name: 'Gomel', countryId: 4 },
      { name: 'Mogilev', countryId: 4 },
      { name: 'Vitebsk', countryId: 4 },
      { name: 'Hrodna', countryId: 4 },
      { name: 'Brest', countryId: 4 },
      // Uzbekistan
      { name: 'Tashkent', countryId: 5 },
      { name: 'Samarkand', countryId: 5 },
      { name: 'Bukhara', countryId: 5 },
      { name: 'Namangan', countryId: 5 },
      { name: 'Andijan', countryId: 5 },
      { name: 'Nukus', countryId: 5 },
      // Kyrgyzstan
      { name: 'Bishkek', countryId: 6 },
      { name: 'Osh', countryId: 6 },
      { name: 'Jalal-Abad', countryId: 6 },
      { name: 'Karakol', countryId: 6 },
      { name: 'Tokmok', countryId: 6 },
      { name: 'Talas', countryId: 6 },
      // Tajikistan
      { name: 'Dushanbe', countryId: 7 },
      { name: 'Khujand', countryId: 7 },
      { name: 'Bokhtar', countryId: 7 },
      { name: 'Kulob', countryId: 7 },
      { name: 'Istaravshan', countryId: 7 },
      { name: 'Panjakent', countryId: 7 },
      // Turkmenistan
      { name: 'Ashgabat', countryId: 8 },
      { name: 'Turkmenabat', countryId: 8 },
      { name: 'Dashoguz', countryId: 8 },
      { name: 'Mary', countryId: 8 },
      { name: 'Balkanabat', countryId: 8 },
      { name: 'Bayramaly', countryId: 8 },
      // Armenia
      { name: 'Yerevan', countryId: 9 },
      { name: 'Gyumri', countryId: 9 },
      { name: 'Vanadzor', countryId: 9 },
      { name: 'Hrazdan', countryId: 9 },
      { name: 'Abovyan', countryId: 9 },
      { name: 'Kapan', countryId: 9 },
      // Azerbaijan
      { name: 'Baku', countryId: 10 },
      { name: 'Ganja', countryId: 10 },
      { name: 'Sumqayit', countryId: 10 },
      { name: 'Mingachevir', countryId: 10 },
      { name: 'Shirvan', countryId: 10 },
      { name: 'Nakhchivan', countryId: 10 },
      // Georgia
      { name: 'Tbilisi', countryId: 11 },
      { name: 'Kutaisi', countryId: 11 },
      { name: 'Batumi', countryId: 11 },
      { name: 'Rustavi', countryId: 11 },
      { name: 'Zugdidi', countryId: 11 },
      { name: 'Gori', countryId: 11 },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
