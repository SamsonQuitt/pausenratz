<?php

namespace App\Enums;

enum UserStates: int
{
    case ACTIVE = 0;
    case PAUSED = 1;
    case EXCURSION = 2;
    case ABSENT = 3;
    case INACTIVE = 4;

    public function label(): string
    {
        return match($this) {
            UserStates::ACTIVE => 'Auf dem Gelände',
            UserStates::PAUSED => 'In der Pause',
            UserStates::EXCURSION => 'Auf Ausflug',
            UserStates::ABSENT => 'Abwesend / Krank',
            UserStates::INACTIVE => 'Nicht mehr aktiv'
        };
    }
}
