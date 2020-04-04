module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'workoutplan',
    define: {
        timestamps: true, // insere coluna created_at e update_at
        underscored: true,
        underscoredAll: true, // nomenclatura de nome de tabelas
    },
};
