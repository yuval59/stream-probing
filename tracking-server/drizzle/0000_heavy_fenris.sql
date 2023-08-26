CREATE TABLE IF NOT EXISTS "stream_data" (
	"id" varchar PRIMARY KEY NOT NULL,
	"stream_id" varchar NOT NULL,
	"video_bitrate" integer,
	"audio_bitrate" integer,
	"width" integer,
	"height" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stream" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"source" varchar NOT NULL,
	"video" boolean NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stream_data" ADD CONSTRAINT "stream_data_stream_id_stream_id_fk" FOREIGN KEY ("stream_id") REFERENCES "stream"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
