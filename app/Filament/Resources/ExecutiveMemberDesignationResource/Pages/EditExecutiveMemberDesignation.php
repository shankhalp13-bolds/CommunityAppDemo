<?php

namespace App\Filament\Resources\ExecutiveMemberDesignationResource\Pages;

use App\Filament\Resources\ExecutiveMemberDesignationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditExecutiveMemberDesignation extends EditRecord
{
    protected static string $resource = ExecutiveMemberDesignationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
