<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ExecutiveMemberDesignationResource\Pages;
use App\Filament\Resources\ExecutiveMemberDesignationResource\RelationManagers;
use App\Models\ExecutiveMemberDesignation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ExecutiveMemberDesignationResource extends Resource
{
    protected static ?string $model = ExecutiveMemberDesignation::class;

    protected static ?string $navigationIcon = 'heroicon-o-check-badge';

    protected static ?string $navigationGroup = "Member Management";

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('sort')
                    ->hidden()
                    ->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('sort')
                    ->numeric()
                    ->sortable(),
            ])
            ->reorderable('sort')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListExecutiveMemberDesignations::route('/'),
            'create' => Pages\CreateExecutiveMemberDesignation::route('/create'),
            'view' => Pages\ViewExecutiveMemberDesignation::route('/{record}'),
            'edit' => Pages\EditExecutiveMemberDesignation::route('/{record}/edit'),
        ];
    }
}
