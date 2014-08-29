export default {
  name: 'moment',

  initialize: function() {
    moment.locale('en', {
      calendar : {
          lastDay : '[yesterday]',
          sameDay : '[today]',
          nextDay : '[tomorrow]',
          lastWeek : '[last] dddd',
          nextWeek : 'dddd',
          sameElse : 'L'
      }
    });
  }
};
