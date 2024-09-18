<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GompaResource\Pages;
use App\Filament\Resources\GompaResource\RelationManagers;
use App\Models\Gompa;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GompaResource extends Resource
{
    protected static ?string $model = Gompa::class;

    protected static ?string $navigationIcon = 'eos-temple-buddhist-o';

    protected static ?string $navigationGroup = "Website Management";

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('gompa_name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('image_path')
                    ->image()
                    ->required(),
                Forms\Components\RichEditor::make('gompa_description')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('gompa_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('gompa_description')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image_path'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => Pages\ListGompas::route('/'),
            'create' => Pages\CreateGompa::route('/create'),
            'view' => Pages\ViewGompa::route('/{record}'),
            'edit' => Pages\EditGompa::route('/{record}/edit'),
        ];
    }
}
