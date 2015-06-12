<?php
/**
 * @file
 * homepage_context.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function homepage_context_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'homepage';
  $context->description = 'True if current page is homepage.';
  $context->tag = 'theme';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'indicia_logger-indicia_logger' => array(
          'module' => 'indicia_logger',
          'delta' => 'indicia_logger',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('True if current page is homepage.');
  t('theme');
  $export['homepage'] = $context;

  return $export;
}
