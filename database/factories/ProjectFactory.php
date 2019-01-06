<?php

use Faker\Generator as Faker;
use App\Entities\Project;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->text,
    ];
});
