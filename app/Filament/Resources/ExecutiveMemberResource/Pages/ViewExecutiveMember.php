<?php

namespace App\Filament\Resources\ExecutiveMemberResource\Pages;

use App\Filament\Resources\ExecutiveMemberResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewExecutiveMember extends ViewRecord
{
    protected static string $resource = ExecutiveMemberResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
