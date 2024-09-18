<?php

namespace App\Filament\Resources\ConstituencyResource\Pages;

use App\Filament\Resources\ConstituencyResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewConstituency extends ViewRecord
{
    protected static string $resource = ConstituencyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
