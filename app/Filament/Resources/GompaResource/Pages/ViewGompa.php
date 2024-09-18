<?php

namespace App\Filament\Resources\GompaResource\Pages;

use App\Filament\Resources\GompaResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewGompa extends ViewRecord
{
    protected static string $resource = GompaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
