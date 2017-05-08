<?php
   /*
   Plugin Name: WP Mobile Menu Fix
   Description: Fix for mobile menu scaffolding on DIVI child themes
   Version: 0.9
   Author: Tom Ford
   Author URI: http://tomford.codes
   */



	function tfw_mmf_enqueue_script()
	{

		wp_enqueue_script('tfw-mmf-js', plugin_dir_url(__FILE__) . 'js/mmf-fix.js', array('jquery'), '1.0');
		wp_enqueue_style('tfw-mff-css', plugin_dir_url(__FILE__) . 'css/mmf-fix.css');

	}

  	add_action('wp_enqueue_scripts','tfw_mmf_enqueue_script');
?>