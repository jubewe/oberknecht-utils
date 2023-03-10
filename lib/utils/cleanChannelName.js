/** @param {String} channel */
function cleanChannelName(channel) {
    if (!(channel ?? undefined)) return undefined;
    return channel.trim().replace(/^#/g, "");
};

module.exports = cleanChannelName;