const ProductHome = `<main>
    <% for(const product of products) { %>
        <div style="display: flex;">
            <div style="border: 1px solid black;margin: 1em;">
                <img width="300" height="300" src="<%= product.image %>" alt="">
            </div>
            <div>
                <h3>
                    <%= product.name %>
                </h3>
                <p>
                    <%= product.detail %>
                </p>
                <div>
                    <a href="/product/<%= product.id %>">
                        <button>buy $<%= product.price %></button>
                    </a>
                </div>

            </div>
        </div>
        <% } %>
</main>`;

export default ProductHome;
