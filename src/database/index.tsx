type TRepoData = {
    id: number;
    url_deploy: string;
    url_repo: string;
    img: string;
    name: string;
    description: string;
};

export const repositoriesDatabase: Array<TRepoData> = [
    {
        id: 1,
        url_deploy: "https://kenziehub-lovat-tau.vercel.app/",
        url_repo: "https://github.com/lucasvabrantes/kenziehub",
        img: "/images/kenziehub.png",
        name: "KenzieHub",
        description:
            "Plataforma construída com ReactJs, Styled-Components, Zod, React-Toastify e Axios. Permite ao usuário, cadastrar-se, logar, cadastrar tecnologias e seu respectivo nível de conhecimento, podendo também deletá-las e atualizá-las.",
    },
    {
        id: 2,
        url_deploy:
            "https://kenzie-academy-brasil-developers-react-entrega-s3-5f8fl93eq.vercel.app/",
        url_repo: "https://github.com/lucasvabrantes/hamburgueria-kenzie",
        img: "/images/hamburgueriaKenzie.png",
        name: "Hamburgueria Kenzie",
        description:
            "Página de uma hamburgueria, na qual é possível adicionar produtos no carrinho de compras, remover individualmente, remover todos de uma vez. Ademais, há opção de buscar o produto pelo seu nome ou da categoria a qual pertence.",
    },
    {
        id: 3,
        url_deploy:
            "https://kenzie-academy-brasil-developers-react-entrega-s1-nfzmm9bcj.vercel.app/",
        url_repo: "https://github.com/lucasvabrantes/Nu-Kenzie",
        img: "/images/nukenzie.png",
        name: "Nu Kenzie",
        description:
            "Basicamente, trata-se de uma aplicação totalmente responsiva, na qual é possível adicionar valores, sendo estes, ou uma despesa, ou uma entrada. Também é possível excluir uma transação individualmente da lista de resumo financeiro. ",
    },
    {
        id: 4,
        url_deploy: "https://lucasabrantes.vercel.app/",
        url_repo: "https://github.com/lucasvabrantes/my_portfolio",
        img: "/images/my_portfolio.png",
        name: "Portfólio Lucas Abrantes",
        description:
            "Repositório deste Portfólio. Projeto construído com Nextjs, styled-components, ",
    },
    // {
    //     id: 5,
    //     url_deploy:
    //         "https://kenzie-academy-brasil-developers-react-entrega-s1-nfzmm9bcj.vercel.app/",
    //     url_repo: "https://github.com/lucasvabrantes/Nu-Kenzie",
    //     img: "/images/api.png",
    //     name: "Nu Kenzie",
    //     description:
    //         "Basicamente, trata-se de uma aplicação totalmente responsiva, na qual é possível adicionar valores, sendo estes, ou uma despesa, ou uma entrada. Também é possível excluir uma transação individualmente da lista de resumo financeiro. ",
    // },
    // {
    //     id: 6,
    //     url_deploy:
    //         "https://kenzie-academy-brasil-developers-react-entrega-s1-nfzmm9bcj.vercel.app/",
    //     url_repo: "https://github.com/lucasvabrantes/Nu-Kenzie",
    //     img: "/images/api.png",
    //     name: "Nu Kenzie",
    //     description:
    //         "Basicamente, trata-se de uma aplicação totalmente responsiva, na qual é possível adicionar valores, sendo estes, ou uma despesa, ou uma entrada. Também é possível excluir uma transação individualmente da lista de resumo financeiro. ",
    // },
];
