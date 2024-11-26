import { useEffect, useState } from "react"
import { BootstrapLayout } from "../../layout/BootstrapLayout";
import { ListGroup, Pagination, Spinner } from "react-bootstrap";

export const PokemonPage = () => {

    const [pokemonList, setPokemonList] = useState<{ name: string, url: string }[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    const ITEMS_PER_PAGE = 10;

    useEffect(() => {

        const fetchPokemon = async (page: number) => {
            setLoading(true);
            const offset = (page - 1) * ITEMS_PER_PAGE;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`);
            const data = await response.json();
            setPokemonList(data.results);
            setTotalPages(Math.ceil(data.count / ITEMS_PER_PAGE));
            setLoading(false);
        };
        fetchPokemon(currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPaginationItems = () => {
        const items = [];

        // Siempre mostrar la primera página
        items.push(
            <Pagination.Item key={1} active={1 === currentPage} onClick={() => handlePageChange(1)}>
                1
            </Pagination.Item>
        );

        // Agregar ellipsis al inicio si la página actual es mayor que 3
        if (currentPage > 3) {
            items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
        }

        // Mostrar las páginas cercanas a la actual
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
                    {i}
                </Pagination.Item>
            );
        }

        // Agregar ellipsis al final si la página actual está lejos del final
        if (currentPage < totalPages - 2) {
            items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
        }

        // Siempre mostrar la última página
        if (totalPages > 1) {
            items.push(
                <Pagination.Item key={totalPages} active={totalPages === currentPage} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <BootstrapLayout>
            <h2 className="my-4">Lista de Pokémon</h2>
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <ListGroup>
                    {pokemonList.map((pokemon, index) => (
                        <ListGroup.Item key={index}>
                            {pokemon.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            <div className="d-flex align-items-center justify-content-center mt-4">
                <Pagination>
                    <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                    {renderPaginationItems()}
                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                    <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>

                <span className="ms-3">
                    Página {currentPage} de {totalPages}
                </span>
            </div>
        </BootstrapLayout >
    )
}