/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
document.addEventListener("DOMContentLoaded", function(event) {
    function updateTime(){
        $('#currentTimeDisplay').html(new Date().toLocaleString());
        setTimeout(updateTime,1000);
    }
    updateTime();
});