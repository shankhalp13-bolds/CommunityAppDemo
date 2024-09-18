<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ConstituencyResource\Pages;
use App\Filament\Resources\ConstituencyResource\RelationManagers;
use App\Models\Constituency;
use App\Models\District;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ConstituencyResource extends Resource
{
    protected static ?string $model = Constituency::class;

    protected static ?string $navigationIcon = 'heroicon-o-map';

    protected static ?string $navigationGroup = 'State management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('district_id')
                    ->label('District')
                    ->native(false)
                    ->options(function () {
                        return District::pluck('name', 'id');
                    }),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('district.name')->label('District')
                    // ->numeric()
                    ->sortable(),
            ])
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
            'index' => Pages\ListConstituencies::route('/'),
            'create' => Pages\CreateConstituency::route('/create'),
            'view' => Pages\ViewConstituency::route('/{record}'),
            'edit' => Pages\EditConstituency::route('/{record}/edit'),
        ];
    }
}
