<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GpuResource\Pages;
use App\Filament\Resources\GpuResource\RelationManagers;
use App\Models\Constituency;
use App\Models\Gpu;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GpuResource extends Resource
{
    protected static ?string $model = Gpu::class;

    protected static ?string $navigationIcon = 'heroicon-o-server';

    protected static ?string $navigationLabel = 'GPU';

    protected static ?string $navigationGroup = 'State management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('constituency_id')
                    ->label('Constituency')
                    ->native(false)
                    ->options(function () {
                        return Constituency::pluck('name', 'id');
                    }),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('constituency.name')->label('Constituency')
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
            'index' => Pages\ListGpus::route('/'),
            'create' => Pages\CreateGpu::route('/create'),
            'view' => Pages\ViewGpu::route('/{record}'),
            'edit' => Pages\EditGpu::route('/{record}/edit'),
        ];
    }
}
