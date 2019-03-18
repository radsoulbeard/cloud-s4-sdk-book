module.exports = {
    url: function () {
        return this.api.launchUrl
    },
    elements: {
        body: 'body',
        title:
        {
           selector : ".//h1[text()]",
           locateStrategy: "xpath"
        }
    }
};
