import { Model, UUIDV4 } from "sequelize";

interface ProductsAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  enable: true;
  image: string;
  date: string;
}

export default (sequelize: any, DataTypes: any) => {
  class Products
    extends Model<ProductsAttributes>
    implements ProductsAttributes
  {
    id!: string;
    name!: string;
    description!: string;
    price!: number;
    stock!: number;
    enable!: true;
    image!: string;
    date!: string;

    //producto puede tener muchas categorias
    static associate(models: any) {
      Products.hasMany(models.Review);
      Products.hasMany(models.Favorites);
      Products.hasMany(models.ProductOrders);
      Products.hasMany(models.ProductCategories);
    }
  }

  Products.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
