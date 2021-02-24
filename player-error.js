var ErrorPlugin = Clappr.ContainerPlugin.extend({
  name: 'error_plugin',
  background: 'https://i68.servimg.com/u/f68/16/98/17/92/404-1012.jpg',
  bindEvents: function() { this.listenTo(this.container, Clappr.Events.CONTAINER_ERROR, this.onError) },
  hide: function() { this._err && this._err.remove() },
  show: function() {
    var $ = Clappr.$
    this.hide();
    var txt = (this.options.errorPlugin && this.options.errorPlugin.text) ? this.options.errorPlugin.text : 'Your connection is low Encountered Error';
    this._err = $('<div>')
      .css({
        'position': 'absolute',
        'z-index': '999',
        'width': '100%',
        'height': '100%',
        'background-image': 'url(' + this.background + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'padding-top': '3%',
        'text-align': 'center',
        'font-weight': 'bold',
        'text-shadow': '0px 0px #fff',
      })
      .append($('<h2>')
        .text(txt)
        .css({
          'font-size': '200%',
        }))
      .append($('<p>').html('')

        .css({
          'font-size': '120%',
          'margin': '15px',
        }));
    this.container && this.container.$el.prepend(this._err);
  },
  onError: function(e) {
    if (!this.container) return;
    this.show();
    this.container.getPlugin('click_to_pause').disable();
  }
});
