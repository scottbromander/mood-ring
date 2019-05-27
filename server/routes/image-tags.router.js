const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ALL TAGS FOR ALL PICTURES
router.get('/', (req,res) => {
    const queryString = `SELECT * FROM "images"
                        JOIN "image_tags" ON "images"."id"="image_tags"."image_id"
                        JOIN "tags" ON "image_tags"."tag_id"="tags"."id";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

// GET ALL TAGS FOR SPECIFIC ID
router.get('/:id', (req,res) => {
    const queryString = `SELECT "name" FROM "images"
                        JOIN "image_tags" ON "images"."id"="image_tags"."image_id"
                        JOIN "tags" ON "image_tags"."tag_id"="tags"."id"
                        WHERE "images"."id"=$1;`;

    pool.query(queryString, [req.params.id])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

// POST A NEW TAG FOR A PICTURE ON THE JUNCTION TABLE
router.post('/', (req,res) => {
    const queryString = `INSERT INTO "image_tags" ("image_id", "tag_id")
                        VALUES ($1, $2)`;

    pool.query(queryString, [req.body.imageId, req.body.tagId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error posting tags to image-tags table: ${err}`);
            res.sendStatus(500);
        });
})

module.exports = router;