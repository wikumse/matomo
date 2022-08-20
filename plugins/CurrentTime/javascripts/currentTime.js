/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

$(function () {

    function initCurrentTimeWidget(){
        
        if($('#siteUtcOffsetSeconds').val() === undefined){
            setTimeout(initCurrentTimeWidget,500);
            return;
        }

        var timeZoneInfo = {};

        timeZoneInfo.localOffset = -(new Date().getTimezoneOffset())*60;
        timeZoneInfo.siteOffset = parseInt($('#siteUtcOffsetSeconds').val());

        updateTime(timeZoneInfo);

    }

    function updateTime(timeZoneInfo){
        
        var localTime = new Date();
        var localTimeEpoch = localTime.getTime();
        var showBoth = timeZoneInfo.siteOffset !== timeZoneInfo.localOffset;

        var currentTimeHtml = '';

        // show site time at the top if the timezons are different
        if(showBoth){
            var siteTime = new Date(localTimeEpoch + (timeZoneInfo.siteOffset - timeZoneInfo.localOffset) * 1000);
            currentTimeHtml += '<p>' 
            + (showBoth ? '<span class="icon-tag-cloud"></span> ' : '') 
            + siteTime.toLocaleString()
            + '</p>';
        }

        // show local time, but add the icon only when the both times are shown.
        currentTimeHtml += '<p>' 
            + (showBoth ? '<span class="icon-user"></span> ' : '') 
            + localTime.toLocaleString()
            + '</p>';

        $('#currentTimeDisplay').html(currentTimeHtml);
        
        setTimeout(updateTime, 1000, timeZoneInfo);

    }

    initCurrentTimeWidget();

});