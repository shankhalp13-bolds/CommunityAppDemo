<?php

namespace App\Filament\Resources\GompaResource\Pages;

use App\Filament\Resources\GompaResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListGompas extends ListRecords
{
    protected static string $resource = GompaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
