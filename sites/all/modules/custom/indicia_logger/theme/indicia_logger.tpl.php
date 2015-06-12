<?php

/**
 * @file
 * indicia_logger template.
 */
?>
<table id="indicia_logger">
  <tbody>
  <tr>
    <th colspan="2">
      Log of visits to <?= $variables['site_name']; ?>
    </th>
  </tr>
  <tr>
    <th>
      IP
    </th>
    <th>
      Timestamp
    </th>
  </tr>
  <?php foreach ($variables['logs'] as $log): ?>
    <tr>
      <td>
        <?= $log['user_ip']; ?>
      </td>
      <td>
        <?= $log['timestamp']; ?>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>