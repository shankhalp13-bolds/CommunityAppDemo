<?php

namespace App\Filament\Resources\ConstituencyResource\Pages;

use App\Filament\Resources\ConstituencyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditConstituency extends EditRecord
{
    protected static string $resource = ConstituencyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
