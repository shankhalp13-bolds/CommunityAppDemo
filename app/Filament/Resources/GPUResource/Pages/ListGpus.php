<?php

namespace App\Filament\Resources\GpuResource\Pages;

use App\Filament\Resources\GpuResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListGpus extends ListRecords
{
    protected static string $resource = GpuResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
