<?php

namespace App\Filament\Resources\ExecutiveMemberResource\Pages;

use App\Filament\Resources\ExecutiveMemberResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditExecutiveMember extends EditRecord
{
    protected static string $resource = ExecutiveMemberResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
