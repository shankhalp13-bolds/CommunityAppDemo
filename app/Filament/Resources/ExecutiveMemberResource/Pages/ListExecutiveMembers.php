<?php

namespace App\Filament\Resources\ExecutiveMemberResource\Pages;

use App\Filament\Resources\ExecutiveMemberResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListExecutiveMembers extends ListRecords
{
    protected static string $resource = ExecutiveMemberResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
