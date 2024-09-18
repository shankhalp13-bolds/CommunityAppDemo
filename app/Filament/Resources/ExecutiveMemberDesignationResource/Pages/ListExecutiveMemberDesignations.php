<?php

namespace App\Filament\Resources\ExecutiveMemberDesignationResource\Pages;

use App\Filament\Resources\ExecutiveMemberDesignationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListExecutiveMemberDesignations extends ListRecords
{
    protected static string $resource = ExecutiveMemberDesignationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
