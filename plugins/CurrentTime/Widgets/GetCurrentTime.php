<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */
namespace Piwik\Plugins\CurrentTime\Widgets;

use Piwik\Widget\Widget;
use Piwik\Widget\WidgetConfig;

use Piwik\Common;
use Piwik\Date;
use Piwik\Site;

class GetCurrentTime extends Widget
{
    public static function configure(WidgetConfig $config)
    {
        /**
         * Set the category the widget belongs to. You can reuse any existing widget category or define
         * your own category.
         */
        $config->setCategoryId('About Matomo');

        /**
         * Set the name of the widget belongs to.
         */
        $config->setName('CurrentTime_CurrentTime');

        /**
         * Set the order of the widget. The lower the number, the earlier the widget will be listed within a category.
         */
        $config->setOrder(99);

    }

    /**
     * This method renders the widget. 
     *
     * @return string
     */
    public function render()
    {
        
        $idSite = Common::getRequestVar('idSite');

        if (empty($idSite)) {
            return;
        }

        $timeZone = Site::getTimezoneFor($idSite);
        $utcOffset = Date::getUtcOffset($timeZone);

        return $this->renderTemplate('currentTime', array("utcOffset" => $utcOffset));

    }

}
