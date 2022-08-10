import { Model, UUIDV4 } from "sequelize";

interface AddressAttributes {
  id: string;
  province: string;
  city: string;
  locality: string;
  street_number: string;
  apartment_floor: string;
  zip_code: string;
}

export default (sequelize: any, DataTypes: any) => {
  class Address extends Model<AddressAttributes> implements AddressAttributes {
    id!: string;
    province!: string;
    city!: string;
    locality!: string;
    street_number!: string;
    apartment_floor!: string;
    zip_code!: string;
    static associate(models: any) {
      Address.hasMany(models.Orders);
    }
  }
  Address.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      locality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apartment_floor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Address",
    }
  );
  return Address;
};
