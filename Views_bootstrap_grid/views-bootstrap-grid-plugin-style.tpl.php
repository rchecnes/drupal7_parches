<?php
/**
 * @file views-bootstrap-grid-plugin-style.tpl.php
 * Default simple view template to display Bootstrap Grids.
 *
 *
 * - $columns contains rows grouped by columns.
 * - $rows contains a nested array of rows. Each row contains an array of
 *   columns.
 * - $column_type contains a number (default Bootstrap grid system column type).
 *
 * @ingroup views_templates
 */
?>

<div id="views-bootstrap-grid-<?php print $id ?>" class="<?php print $classes ?>">
  <?php if ($options['alignment'] == 'horizontal'): ?>

    <div class="row<?php if(!empty($options['row_extra_class'])): print ' '.$options['row_extra_class'];endif;?>">
    <?php foreach ($items as $row): ?>
        <?php foreach ($row['content'] as $column): ?>
          <div class="col col-lg-<?php print $options['col_lg'] ?> col-md-<?php print $options['col_md'] ?> col-sm-<?php print $options['col_sm'] ?> col-xs-<?php print $options['col_xs'] ?><?php if(!empty($options['col_extra_class'])): print ' '.$options['col_extra_class'];endif;?>">
            <?php if(!empty($options['box_column_class'])):?>
              <div class="<?php print $options['box_column_class'];?>">
            <?php endif; ?>
              <?php print $column['content'] ?>
            <?php if(!empty($options['box_column_class'])):?>
              </div>
            <?php endif; ?>
          </div>
        <?php endforeach ?>
    <?php endforeach ?>
    </div>
    
  <?php else: ?>

    <div class="row<?php if(!empty($options['row_extra_class'])): print ' '.$options['row_extra_class'];endif;?>">
      <?php foreach ($items as $column): ?>
        <div class="col col-lg-<?php print $options['col_lg'] ?> col-md-<?php print $options['col_md'] ?> col-sm-<?php print $options['col_sm'] ?> col-xs-<?php print $options['col_xs'] ?><?php if(!empty($options['col_extra_class'])): print ' '.$options['col_extra_class'];endif;?>">
          <?php foreach ($column['content'] as $row): ?>
            <?php if(!empty($options['box_column_class'])):?>
              <div class="<?php print $options['box_column_class'];?>">
            <?php endif; ?>
              <?php print $row['content'] ?>
            <?php if(!empty($options['box_column_class'])):?>
              </div>
            <?php endif; ?>
          <?php endforeach ?>
        </div>
      <?php endforeach ?>
    </div>

  <?php endif ?>
</div>

