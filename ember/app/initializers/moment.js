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
      },
      week: {
        dow: 1
      }
    });

    /**
     * Check if moment is between, inclusively, two other moments.
     *
     * @param  Moment|String|Number|Date|Array  start
     * @param  Moment|String|Number|Date|Array  end
     * @return Boolean
     */
    moment.fn.isBetween = function (start, end, unit) {
      unit = unit || null;
      var between = this.isAfter(start, unit) && this.isBefore(end, unit);
      var same = this.isSame(start, unit) || this.isSame(end, unit);
      return between || same;
    };
  }
};
