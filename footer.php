            </main><!-- #main -->
            </div><!-- #primary -->
            </div><!-- #content -->

            <footer id="footer" class="site-footer" role="contentinfo">
                <?php
                $footer_query = new WP_Query(array('page_id' => 24));
                while ($footer_query->have_posts()) {
                    $footer_query->the_post();
                    the_content();
                }
                wp_reset_postdata();
                ?>
            </footer>


            </div><!-- #page -->

            <?php wp_footer(); ?>

            </div><!-- #smooth-content -->
            </div><!-- #smooth-wrapper -->

            </body>

            </html>