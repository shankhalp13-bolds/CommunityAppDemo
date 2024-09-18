<?php

namespace App\Filament\Resources\GpuResource\Pages;

use App\Filament\Resources\GpuResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGpu extends EditRecord
{
    protected static string $resource = GpuResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
