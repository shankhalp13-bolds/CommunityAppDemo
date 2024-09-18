<?php

namespace App\Filament\Resources\ExecutiveMemberDesignationResource\Pages;

use App\Filament\Resources\ExecutiveMemberDesignationResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewExecutiveMemberDesignation extends ViewRecord
{
    protected static string $resource = ExecutiveMemberDesignationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
