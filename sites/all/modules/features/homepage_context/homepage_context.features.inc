<?php
/**
 * @file
 * homepage_context.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function homepage_context_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
}
