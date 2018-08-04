<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('title-en');
            $table->text('content');
            $table->text('summary');
            $table->boolean('top')->default(false);
            $table->integer('id_author');
            $table->integer('id_status')->default(0);
            $table->integer('views')->default(0);
            $table->dateTime('time_public');
            $table->softDeletes();
            $table->timestamps();
        });

//        fulltext search for mysql
//        DB::statement('ALTER TABLE articles ADD FULLTEXT fulltext_index (title, content)');

//        fulltext search for pgsql
        DB::statement("ALTER TABLE articles ADD COLUMN searchtext TSVECTOR");
        DB::statement("UPDATE articles SET searchtext = to_tsvector('english', title || '' || content)");
        DB::statement("CREATE INDEX searchtext_gin ON articles USING GIN(searchtext)");
        DB::statement("CREATE TRIGGER ts_searchtext BEFORE INSERT OR UPDATE ON articles FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger('searchtext', 'pg_catalog.english', 'title', 'content')");

    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP TRIGGER IF EXISTS tsvector_update_trigger ON articles");
        DB::statement("DROP INDEX IF EXISTS searchtext_gin");
        DB::statement("ALTER TABLE articles DROP COLUMN searchtext");
        Schema::dropIfExists('articles');
    }
}
