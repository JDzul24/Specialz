import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'medications',
    timestamps: true 
})
class MedicationModel extends Model {
    
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;
    
    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public name!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    public price!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    public quantity!: number;

 
}

export default MedicationModel;
