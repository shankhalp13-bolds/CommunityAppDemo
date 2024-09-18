<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ExecutiveMemberResource\Pages;
use App\Filament\Resources\ExecutiveMemberResource\RelationManagers;
use App\Models\ExecutiveMember;
use App\Models\ExecutiveMemberDesignation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ExecutiveMemberResource extends Resource
{
    protected static ?string $model = ExecutiveMember::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationGroup = "Member Management";

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('fullname')
                    ->required()
                    ->maxLength(255),
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->required(),
                Forms\Components\Select::make('executive_member_designation_id')
                    ->label('Designation')
                    ->native(false)
                    ->options(function () {
                        return ExecutiveMemberDesignation::pluck('name', 'id');
                    }),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('fullname')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('executive_member_designation.name')
                    ->numeric()
                    ->sortable(),
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
            'index' => Pages\ListExecutiveMembers::route('/'),
            'create' => Pages\CreateExecutiveMember::route('/create'),
            'view' => Pages\ViewExecutiveMember::route('/{record}'),
            'edit' => Pages\EditExecutiveMember::route('/{record}/edit'),
        ];
    }
}
