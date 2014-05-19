// Include the UserVoice JavaScript SDK (only needed once on a page).
UserVoice=window.UserVoice||[];
(function(){
    var uv=document.createElement('script');
    uv.type='text/javascript';
    uv.async=true;
    uv.src='//widget.uservoice.com/QaWj1H4fuafZiebNmomsg.js';
    var s=document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(uv,s)
})();

//
// UserVoice Javascript SDK developer documentation:
// https://www.uservoice.com/o/javascript-sdk
//

// Set colors
UserVoice.push(['set', {
  accent_color: '#79D64E',
  trigger_color: '#FFFEED',
  trigger_background_color: '#1ABCDB'
}]);

// Add default trigger to the bottom-right corner of the window:
UserVoice.push(['addTrigger', {
    mode: 'contact',
    trigger_position: 'bottom-right'
}]);

// Autoprompt for Satisfaction and SmartVote (only displayed under certain
// conditions).
UserVoice.push(['autoprompt', {}]);
