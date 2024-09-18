<?php

namespace App\Filament\Resources\GompaResource\Pages;

use App\Filament\Resources\GompaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGompa extends EditRecord
{
    protected static string $resource = GompaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
